import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';

const HomeView = () => {
  const handlerFormClick = () => {
    alert('click');
  };

  return (
    <div>
      <h1>add a user</h1>
      <Input type="text" label="Name" />
      <Input type="text" label="Email" />
      <Button text="submit" onclick={() => handlerFormClick()} />
      <Input type="textarea" label="Description" />
      <hr />
      <h1>list of user</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jane</td>
            <td>jane@email.com</td>
          </tr>
          <tr>
            <td>alex</td>
            <td>alex@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeView;
