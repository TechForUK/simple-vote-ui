import React from 'react';

function TypeOfVoter({ formData, updateData }) {
  return (
    <form>
      <label htmlFor="firstName">
        First Name:
        <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={updateData} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TypeOfVoter;
