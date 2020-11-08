import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

import Input from './components/Input';
import Button from './components/Button';
import { useForm, Controller } from 'react-hook-form';

function App() {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { handleSubmit, control, errors, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data, 'data');
  };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const { name, email } = await response.json();
      setValue('name', name);
      setValue('email', email);
    } catch (error) { }
  };

  return (
    <SafeAreaView >
      <Text>TS Validation and routes</Text>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ onChange, value }) => (
          <Input
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="Name"
            error={errors.name}
            errorText={errors?.name?.message}
          />
        )}
        rules={{
          required: { value: true, message: 'Name is required' }
        }}
      />
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ onChange, value }) => (
          <Input
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="Email"
            error={errors.name}
            errorText={errors?.email?.message}
          />
        )}
        rules={{
          required: { value: true, message: 'Email is required' },
          // required: { value: true },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Not a valid email'
          }
        }}
      />
      <Button onPress={handleSubmit(onSubmit)}
        label="Submit" />
    </SafeAreaView>
  );
}

export default App;
