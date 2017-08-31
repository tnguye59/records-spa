import { RecordBook } from '../types/recordBook';

export type PublishRecordBookAction = Readonly<{
  type: string,
  id: number
}>;

const recordBooks = (state = [], action: PublishRecordBookAction) => {
  switch (action.type) {
    case 'PUBLISH_RECORD_BOOK':
      return state.map((recordBook: RecordBook) =>
        (recordBook.id === action.id) ? { ...recordBook, published: true } : recordBook
      );
    default:
      return state;
  }
};

export default recordBooks;
