import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey, DataType} from 'sequelize-typescript';


@Table
export class FeedItem extends Model<FeedItem> {
  @Column (DataType.TEXT)
  public caption!: string;

  @Column (DataType.TEXT)
  public url!: string;

  @Column (DataType.DATE)
  @CreatedAt
  public createdAt: Date = new Date();

  @Column (DataType.DATE)
  @UpdatedAt
  public updatedAt: Date = new Date();
}
