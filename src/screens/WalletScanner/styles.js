import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scanner: {
    flexGrow: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 32,
    backgroundColor: '#CCCCCC',
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#293462',
    alignSelf: 'center',
  },
  addText: { fontSize: 16, color: '#293462', textAlign: 'center' },
});

export default styles;
