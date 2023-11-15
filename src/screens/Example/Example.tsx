import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import { ApplicationScreenProps } from 'Test/@types/navigation';
import { Colors } from 'Test/src/theme/Variables';
import Dashboard from '../Dashboard/Dashboard';

const Example = ({ navigation }: ApplicationScreenProps) => {
  const { t } = useTranslation(['welcome']);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();
  


  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.transparent }]}>
      <View
        style={[
          Layout.fill,
          Layout.center,
          Layout.colCenter,
          Gutters.smallHPadding,
        ]}
      >
        <Image
          source={Images.logo}
          style={[Layout.fullSize, Layout.absolute]}
        />
      </View>

      {/* Cette partie concerne le bas pas utile pour le moment*/}
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}
      >
        <View>
          <Text style={[Fonts.titleRegular, Fonts.textTiny]}>
            {t('welcome:title')}
          </Text>
        </View>

        <View
          style={[
            Layout.rowCenter,
            Layout.justifyContentBetween,
            Layout.fullWidth,
            Gutters.smallTMargin,
          ]}
        >
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={Fonts.textBold}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={Fonts.textBold}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Example;
