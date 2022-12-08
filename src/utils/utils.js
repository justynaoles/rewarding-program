import { useState, useEffect } from 'react';


//calculate points
export const calcPoints = (base, extra, transaction) => {
    if (transaction <= base) {
        return 0;
    } else if (transaction > base && transaction < extra) {
        return Math.floor(transaction - base);
    } 
    const transactionRounded = Math.floor(transaction); 
    return  (transactionRounded - extra) * 2 + base;
}


//Calculate and display information about user transaction
export const calculateAndDisplayUserTransaction = (users, fn) => {
   const usersList = users.map(user => {
      const userData = {
        name: user.name,
        lastname: user.lastname,
        avatar: user.avatar,
        transactions: [],
        total: []
      }

      user.transactions.map(transaction => {
          const monthData = {
            month: transaction.month,
            monthId: transaction.monthId,
            value: [],
            total: null
          }

          if(transaction.payments.length) {
            transaction.payments.map( month => {
              let convertSumToPoint = fn(50,100, month.value);
              monthData.value.push(convertSumToPoint);

              return convertSumToPoint;
            })
          } else {
            monthData.value.push(0);
          }

          userData.total.push(monthData.value.reduce((acc, value) => {
            return acc + value;
          }, 0));

          monthData.total = monthData.value.reduce((acc, value) => {
            return acc + value;
          }, 0);
          userData.transactions.push(monthData);

          return monthData;
      });

      userData.total = userData.total.reduce((acc, value) => {
        return acc + value;
      }, 0);

      userData.transactions.sort((a,b) => a.monthId - b.monthId);

      return userData;
    });

    return usersList;
  }

  //use spinner when element loading
export const useSpinner = () => {
    const [isLoading, setLoading] = useState(true);    
    
    useEffect(() => {
        setLoading(false);
      },[]);

      return isLoading;
};