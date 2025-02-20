
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

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

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
  
  
    @Column({
    type: DataType.ENUM(...Object.values(Gender)),
  })
  gender!: Gender;
}
