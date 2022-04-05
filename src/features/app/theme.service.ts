import 'reflect-metadata';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Service} from 'typedi';
import {ThemeType} from './app.model';

@Service()
export default class ThemeService {
  async loadFromLocal(): Promise<ThemeType> {
    const themeType = 'os';
    const fromLocal = await AsyncStorage.getItem('themeType');
    if (!fromLocal) {
      return themeType;
    }
    const result = JSON.parse(fromLocal);
    return result.themeType as ThemeType;
  }

  async saveToLocal(themeType: ThemeType): Promise<void> {
    await AsyncStorage.setItem('themeType', JSON.stringify({themeType}));
  }
}
