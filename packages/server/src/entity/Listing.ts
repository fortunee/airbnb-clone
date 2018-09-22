import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  // JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity('listings')
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('text') pictureUrl: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column('int') price: number;

  @Column('int') beds: number;

  @Column('int') guests: number;

  @Column('double precision') latitude: number;

  @Column('double precision') longitude: number;

  @Column('text', { array: true })
  amenities: string[];

  // @Column('uuid')
  // ownerId: string;

  @ManyToOne(() => User, user => user.listings)
  /** I could use the @JoinColumn to rename the userId field to whatever I want */
  // @JoinColumn({ name: 'ownerId'}
  user: User;
}
