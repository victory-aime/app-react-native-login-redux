import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import { Colors } from '../../theme/Variables';
import { FIREBASE_AUTH } from 'Test/src/Firebase/FirebaseConfig';
import 'firebase/auth';
import firebase from 'firebase/app';
import { sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';

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
  const [email, setEmail] = useState('azerty2@yopmail.com');
  const auth = FIREBASE_AUTH;

  const sendSignInLink = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, {
        url: 'https://proxymitauthdemo.page.link/H3Ed',
        handleCodeInApp: true,
      });
    } catch (e: any) {
      console.log("Erreur lors de l'envoi du lien de connexion :", e.error);
    }
  };
  

  useEffect(() => {
    const handleLink = async (link: string | undefined) => {
      try {
        const result = await signInWithEmailLink(auth, email, link);
        console.warn(result);
        console.warn(link);
        if (result.user.emailVerified) {
          // Utilisateur connecté et e-mail vérifié
          console.log('Connexion réussie!');
          // Redirigez l'utilisateur vers la page d'accueil ou une autre page
          // navigation.navigate('Home');
        } else {
          // L'e-mail n'est pas encore vérifié
          console.log("L'e-mail n'est pas encore vérifié.");
        }
      } catch (error) {
        console.log('Erreur lors de la connexion avec le lien e-mail :', error);
      }
    };

    //const unsubscribe = auth.onLink(handleLink);

    /*return () => {
      unsubscribe();
    };*/
  }, [email]);



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

          <TouchableOpacity>
            <Text style={[Fonts.textRight]}>
              {t('loginTextForgotPassword')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Gutters.regularTMargin]}
            onPress={sendSignInLink}
          >
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
