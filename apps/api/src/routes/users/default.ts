import { Request, Response } from 'express'
import Users from '@/models/users'
import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED, USER_NOT_EXIST } from '@/common/constants/messages'
import { SUCCESS_UPDATE, USER_EXISTS, USER_SUCCESS_REGISTER } from '@/common/constants'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const usersCounts = await Users.find({ deletedAt: { $exists: false } }).countDocuments()
    const getAllUsers = await Users.find({ deletedAt: { $exists: false } }).sort({ createdAt: -1 })
    res.json({
      error: false,
      items: getAllUsers,
      itemCount: usersCounts,
      message: null,
    })
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: message,
    })
  }
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const getUser = await Users.findOne({ _id: id, deletedAt: { $exists: false } })
    if(getUser) {
      res.json({
        error: false,
        item: getUser,
        message: null,
      })
    } else {
      res.json({
        error: false,
        item: null,
        message: USER_NOT_EXIST,
      })
    }
    
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json({
      error: true,
      item: null,
      message: message,
    })
  }
}

export const addUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  if (firstName && lastName && email) {
    try {
      const getExistingUser = await Users.find({
        email,
        deletedAt: { $exists: false },
      });

      if (getExistingUser.length === 0) {
        const newUser = new Users(req.body);

        const createProject = await newUser.save();

        res.json({
          error: false,
          item: createProject,
          itemCount: 1,
          message: USER_SUCCESS_REGISTER,
        });
      } else {
        res.json({
          error: true,
          message: USER_EXISTS,
          items: null,
          itemCount: null,
        });
      }
    } catch (err: any) {
      res.json({
        error: true,
        message: err.message || UNKNOWN_ERROR_OCCURRED,
        items: null,
        itemCount: null,
      });
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
      items: null,
      itemCount: null,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { firstName, lastName } = req.body

  if (id) {
    const getProject = await Users.findById(id)
    if (getProject) {

      const data = { firstName, lastName }
      const updatedProject = await Users.findByIdAndUpdate(id, data, { new: true });

      res.json({
        error: false,
        item: updatedProject,
        itemCount: 1,
        message: SUCCESS_UPDATE,
      })
    } else {
      res.json({
        error: true,
        message: USER_NOT_EXIST,
        items: null,
        itemCount: null,
      })
    }
  }
}