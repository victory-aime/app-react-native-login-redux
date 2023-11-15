import React, { useState } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import { Colors } from '../../theme/Variables';
import { FIREBASE_APP, FIREBASE_AUTH } from 'Test/src/Firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { loginSuccess } from 'Test/src/store/authSlice';

const Login = ({ navigation }: any) => {
  const { t } = useTranslation(['login']);
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

  const [email, setEmail] = useState('anotheruser@test.com');
  const [password, setPassword] = useState('azerty');
  const auth = FIREBASE_AUTH;

  const SignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      // Si la connexion réussit, dispatch l'action loginSuccess
      if (response) {
        dispatch(
          loginSuccess({
            token: response._tokenResponse.idToken,
            email: response.user.email,
          }),
        );
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

      <View style={[Layout.center, Gutters.largeTMargin, Gutters.smallBMargin]}>
        <Text style={[Fonts.titleRegular, Fonts.textTiny]}>
          {t('login:title')}
        </Text>
      </View>
      <View
        style={[
          Layout.fill,
          {
            backgroundColor: Colors.white,
            paddingVertical: 50,
            paddingHorizontal: 15,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          },
        ]}
      >
        <Text
          style={[Fonts.textRegular, Fonts.textCenter, Gutters.smallBMargin]}
        >
          {t('login:Title')}
        </Text>
        <View>
          <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
            {t('login:email')}
          </Text>

          <TextInput
            style={[Common.textInput, Gutters.smallBMargin]}
            autoCapitalize="none"
            placeholder={t('login:EmailLabel')}
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
            {t('login:password')}
          </Text>

          <TextInput
            style={[Common.textInput, Gutters.smallBMargin]}
            placeholder={t('login:passwordLabel')}
            //secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity>
            <Text style={[Fonts.textRight]}>
              {t('loginTextForgotPassword')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Gutters.regularTMargin]} onPress={SignIn}>
            <Text
              style={[
                Common.button.rounded,
                Fonts.textBold,
                Fonts.textCenter,
                Fonts.textWhite,
              ]}
            >
              {t('login:loginButton')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Layout.rowCenter, Gutters.smallTMargin]}>
          <Text>{t('loginTextEnd')} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[Fonts.textSmall]}>{t('loginButtonEnd')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
function singInWithEmailAndPassword(
  auth: FirebaseApp,
  email: string,
  password: string,
) {
  throw new Error('Function not implemented.');
}
