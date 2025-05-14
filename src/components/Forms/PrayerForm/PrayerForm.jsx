// PrayerForm.js
import React from 'react';
import './PrayerForm.scss'; // Optional: if you have specific styles for the form
import Label from '../../Forms/Label';
import Input from '../../Forms/Input';
import Text from '../../general/Text';
import RadioButton from '../../Forms/RadioButton';
import Button from '../../general/Button';

function PrayerForm({
  formData,
  handleChange,
  handleRadioChange,
  handleSubmit,
  errors,
}) {
  return (
    <form className="prayer-form" onSubmit={handleSubmit}>
      <Text
        text="Who should we share this prayer request with?"
        color="#4B4B4B"
        fontFamily="Lato, sans-serif"
        fontWeight="bold"
        fontSize="24px"
        className="center"
      />

      {errors.shareWith && (
        <Text
          className="error shareWith"
          text={errors.shareWith}
          color="red"
          fontFamily="Krub"
          fontSize="14px"
        />
      )}
      <div className="radio-button-container">
        <RadioButton
          label="The Pastor Only (confidential)"
          value="pastorOnly"
          checked={formData.shareWith === 'pastorOnly'}
          onChange={handleRadioChange}
        />
        <RadioButton
          label="The Pastor & Prayer Team (confidential)"
          value="pastorAndTeam"
          checked={formData.shareWith === 'pastorAndTeam'}
          onChange={handleRadioChange}
        />
        <RadioButton
          label="All Members of CRBC (not confidential)"
          value="allMembers"
          checked={formData.shareWith === 'allMembers'}
          onChange={handleRadioChange}
        />
      </div>

      <Label text="Your Name" />
      <div className="form-group">
        <div className="col">
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <Text
              className="error"
              text={errors.firstName}
              color="red"
              fontFamily="Krub"
              fontSize="14px"
            />
          )}
        </div>
        <div className="col">
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <Text
              className="error"
              text={errors.lastName}
              color="red"
              fontFamily="Krub"
              fontSize="14px"
            />
          )}
        </div>
      </div>

      <Label text="Your Email Address" />
      <Input
        type="email"
        name="email"
        placeholder="johnsmith@email.com"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
        <Text
          className="error"
          text={errors.email}
          color="red"
          fontFamily="Krub"
          fontSize="14px"
        />
      )}

      <Label text="What is your prayer request?" />
      <div className="col">
        <Input
          type="textarea"
          name="prayerRequest"
          value={formData.prayerRequest}
          onChange={handleChange}
        />
        {errors.prayerRequest && (
          <Text
            className="error"
            text={errors.prayerRequest}
            color="red"
            fontFamily="Lato"
            fontWeight="medium"
          />
        )}
      </div>

      <Button backgroundColor="#FF6600" text="SUBMIT" type="submit" />
    </form>
  );
}

export default PrayerForm;
