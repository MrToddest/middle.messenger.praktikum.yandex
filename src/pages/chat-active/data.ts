import { MessageType } from '@/types';

export const data = [
{
  title: 'Владось',
  preview: 'Изображение',
  date: '07:29',
  count: '',
  active: true
},
{
  title: 'Тема',
  preview: 'Вы: Хорошо, скину',
  date: '01:00',
  count: ''
},
{
  title: '+7 859 452 84 84',
  preview: 'просто ЖЕСТЬ!!!',
  date: '15:12',
  count: '4'
},
{
  title: 'Антон',
  preview: 'Плохо будет графу Суворову)',
  date: 'Пт',
  count: '2',
  
}
]

export const messages = [
  {
    type: MessageType.DATE,
    value: '19 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'А гвозди?)',
    date: '11:56',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Так вот же они)))',
    date: '11:57',
    sended: true,
  },
  {
    type: MessageType.DATE,
    value: '19 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'А белые бараны чьи?)))',
    date: '11:57',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Мои xD',
    date: '12:00',
    sended: true,
  }
];
