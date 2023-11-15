import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import { Colors } from '../../theme/Variables';
import { FIREBASE_APP, FIREBASE_AUTH } from 'Test/src/Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ navigation }: any) => {
  const { t } = useTranslation(['signUp']);
  const {
    Common,
    Gutters,
    Fonts,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const [isSunIcon, setIsSunIcon] = useState(isDark);
  const dispatch = useDispatch();

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
    setIsSunIcon(darkMode);
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const SignUp = async () => {
    // implementation of connection with firebase and add user to firebase
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (response) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.transparent }]}>
      <View style={[Layout.alignItemsEnd, Gutters.largeRMargin]}>
        <View style={[Layout.row]}>
          <TouchableOpacity
            style={[Common.button.circleICon, Gutters.smallTMargin]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            <Image
              source={
                isSunIcon
                  ? Images.darkAndLight.sunLine
                  : Images.darkAndLight.darkLine
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Common.button.circleICon,
              Gutters.smallTMargin,
              Gutters.smallLMargin,
            ]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <Image
              source={Images.icons.translate}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[Layout.center, Gutters.smallTMargin, Gutters.smallBMargin]}>
        <Text style={[Fonts.titleRegular, Fonts.textTiny]}>
          {t('signUp:title')}
        </Text>
      </View>

      <View
        style={[
          Layout.fill,
          {
            backgroundColor: Colors.white,
            paddingVertical: 25,
            paddingHorizontal: 15,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          },
        ]}
      >
        <Text
          style={[Fonts.textRegular, Fonts.textCenter, Gutters.smallBMargin]}
        >
          {t('signUp:Title')}
        </Text>
        <KeyboardAvoidingView behavior="padding">
          <View>
            {/* <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
            {t('signUp:username')}
          </Text>

          <TextInput
            style={[Common.textInput, Gutters.smallBMargin]}
            placeholder={t('signUp:usernameInput')}
            value={email}
            onChangeText={text => setEmail(text)}
          />*/}

            <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
              {t('signUp:email')}
            </Text>

            <TextInput
              style={[Common.textInput, Gutters.smallBMargin]}
              placeholder={t('signUp:EmailInput')}
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
              {t('signUp:password')}
            </Text>

            <TextInput
              style={[Common.textInput, Gutters.smallBMargin]}
              placeholder={t('signUp:passwordInput')}
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity style={[Gutters.regularTMargin]} onPress={SignUp}>
              <Text
                style={[
                  Common.button.rounded,
                  Fonts.textBold,
                  Fonts.textCenter,
                  Fonts.textWhite,
                ]}
              >
                {t('signUp:SignUpButton')}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View style={[Layout.rowCenter, Gutters.smallTMargin]}>
          <Text>{t('SignUpTextEnd')} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[Fonts.textSmall]}>{t('SignUpButtonEnd')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
