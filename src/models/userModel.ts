// import {
//   Table,
//   Column,
//   Model,
//   DataType,
//   HasMany,
// } from 'sequelize-typescript';
// // import Product from './productModel';

// @Table({
//   tableName: 'users',
//   timestamps: true,
// })
// class User extends Model {
//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   username!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//     unique: true,
//   })
//   email!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   password!: string;

// //   @HasMany(() => Product)
// //   products!: Product[];
// }

// export default User;
// src/models/userModel.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'users',
  paranoid: true,
})
export default class User extends Model {

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  image_url!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;


}
