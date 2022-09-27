import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';

import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from './CustomInput';

const SignUp = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/(\d){9}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover'}}
        source={require('../src/images/bg3.jpg')}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Text style={{fontSize: 20}}>Sign Up Screen</Text>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={(values) => {
                console.log(values);
                navigation.navigate('Project');
              }}>
              {({handleSubmit, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.field}
                  />

                  <Button
                    onPress={handleSubmit}
                    title="SIGN UP"
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',

    padding: 10,
    elevation: 10,
  },
  field: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    width: 200,
    height: 30,
    textAlign: 'center',
  },
});
export default SignUp;
