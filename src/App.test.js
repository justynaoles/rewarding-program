import { render, screen } from '@testing-library/react';
import App from './App';
import { calcPoints } from './utils/utils';
import { calculateAndDisplayUserTransaction } from './utils/utils';

test('Check if header contains text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to rewarding program/i);
  expect(linkElement).toBeInTheDocument();
});

it('Calculate points', () => {
  expect(calcPoints(50, 100, 120)).toEqual(90);
  expect(calcPoints(50, 100, 40)).toEqual(0);
  expect(calcPoints(50, 100, 50.85)).toEqual(0);
});

const users = [{
    "name": "Adam",
    "lastname": "Smith",
    "avatar": "avatar.jpg",
    "transactions": [
      {
        "month": "December",
        "monthId": 12,
        "payments": [
          {
            "date": "2022-12-01-8:30-AM",
            "value": 124.87,
            "currency": "dollar"
          },
          {
            "date": "2022-12-01-8:30-AM",
            "value": 100.87,
            "currency": "dollar"
          },
          {
            "date": "2022-12-01-8:30-AM",
            "value": 50.87,
            "currency": "dollar"
          },
          {
            "date": "2022-12-01-8:30-AM",
            "value": 20.87,
            "currency": "dollar"
          },
          {
            "date": "2022-12-01-8:30-AM",
            "value": 1250.87,
            "currency": "dollar"
          },
          {
            "date": "2022-12-01-8:30-AM",
            "value": 58.25,
            "currency": "dollar"
          }
        ]
      },
      {
        "month": "November",
        "monthId": 11,
        "payments": [
          {
            "date": "2022-11-01-8:30-AM",
            "value": 100,
            "currency": "dollar"
          },
          {
            "date": "2022-11-01-8:30-AM",
            "value": 63.97,
            "currency": "dollar"
          },
          {
            "date": "2022-11-01-8:30-AM",
            "value": 51.99,
            "currency": "dollar"
          },
          {
            "date": "2022-11-01-8:30-AM",
            "value": 20.87,
            "currency": "dollar"
          },
          {
            "date": "2022-11-01-8:30-AM",
            "value": 50.87,
            "currency": "dollar"
          },
          {
            "date": "2022-11-01-8:30-AM",
            "value": 158.25,
            "currency": "dollar"
          }
        ]
      },
      {
        "month": "October",
        "monthId": 10,
        "payments": [
          {
            "date": "2022-10-01-8:30-AM",
            "value": 424.31,
            "currency": "dollar"
          },
          {
            "date": "2022-10-01-8:30-AM",
            "value": 21,
            "currency": "dollar"
          },
          {
            "date": "2022-10-01-8:30-AM",
            "value": 58,
            "currency": "dollar"
          },
          {
            "date": "2022-10-01-8:30-AM",
            "value": 12.37,
            "currency": "dollar"
          },
          {
            "date": "2022-10-01-8:30-AM",
            "value": 150.87,
            "currency": "dollar"
          },
          {
            "date": "2022-10-01-8:30-AM",
            "value": 788.25,
            "currency": "dollar"
          }
        ]
      }
    ]
  }];

  const expectedUserData = [
    {
      lastname: "Smith",
      name: "Adam",
      total: 5022,
      avatar: "avatar.jpg",
      transactions: [
        {
          month: "October",
          monthId: 10,
          total: 2283,
          value: [698, 0, 8, 0, 151, 1426]
        },
        {
          month: "November",
          monthId: 11,
          total: 230,
          value: [50, 13, 1, 0, 0, 166]
        },
        {
          month: "December",
          monthId: 12,
          total: 2509,
          value: [99, 51, 0, 0, 2351, 8]
        }
      ]
    }
  ];

  it('Display expected user data', () => {
    expect(calculateAndDisplayUserTransaction(users, calcPoints)).toEqual(expectedUserData);
  });
