import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://cw_admin_3:AwZ9uYWe8ctBkK5D@cartwirecluster0.bibl1.mongodb.net/cw_widgets'),
  },
];