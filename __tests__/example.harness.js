import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} from 'react-native-harness';
import { NativeModules, Platform } from 'react-native';

describe('My First Harness Test', () => {
  beforeEach(() => {
    console.log('Setting up test...');
  });

  afterEach(() => {
    console.log('Cleaning up test...');
  });

  it('should access platform information', () => {
    expect(Platform.OS).toMatch(/ios|android/);
    expect(typeof Platform.Version).toBe('string');
  });

  it('should have access to native modules', () => {
    // Test real native modules - no mocks!
    expect(NativeModules).toBeDefined();
    expect(typeof NativeModules).toBe('object');
  });

  it('should run async tests', async () => {
    const result = await Promise.resolve('native testing');
    expect(result).toBe('native testing');
  });
});