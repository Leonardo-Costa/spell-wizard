import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class Home extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            mgs: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            mgs: 'Email Inválido.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            mgs: 'A senha precisa ter entre 8 a 50 caracteres.',
          },
        },
      },
      is_active: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            mgs: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 10);
    });

    return this;
  }
}
