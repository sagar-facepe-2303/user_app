import CvvInfoIcon from '@/components/CvvInfoIcon';
import PciDssBadge from '@/components/PciDssBadge';
import ShieldIcon from '@/components/ShieldIcon';
import addCardForm from '@/data/addCardForm.json';
import { router } from 'expo-router';
import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function AddCardModal({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.content}>
            <Pressable style={styles.handle} onPress={onClose}>
              <View style={styles.handleBar} />
            </Pressable>

            <PciDssBadge />

            <Text style={styles.title}>{addCardForm.title}</Text>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>{addCardForm.fields.cardNumber.label}</Text>
                <TextInput
                  style={styles.input}
                  placeholder={addCardForm.fields.cardNumber.placeholder}
                  placeholderTextColor="#A0A0A0"
                  keyboardType="number-pad"
                />
              </View>

              <View style={styles.row}>
                <View style={[styles.inputGroup, styles.half]}>
                  <Text style={styles.label}>{addCardForm.fields.expiryDate.label}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={addCardForm.fields.expiryDate.placeholder}
                    placeholderTextColor="#A0A0A0"
                    keyboardType="number-pad"
                  />
                </View>

                <View style={[styles.inputGroup, styles.half]}>
                  <Text style={styles.label}>{addCardForm.fields.cvv.label}</Text>
                  <View style={styles.inputWithIcon}>
                    <TextInput
                      style={styles.cvvInput}
                      placeholder={addCardForm.fields.cvv.placeholder}
                      placeholderTextColor="#A0A0A0"
                      keyboardType="number-pad"
                      secureTextEntry
                    />
                    <View style={styles.cvvIcon}>
                      <CvvInfoIcon size={18} />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.securityBox}>
              <ShieldIcon size={24} />
              <Text style={styles.securityBoxText}>
                {addCardForm.securityNote}
              </Text>
            </View>

            <Pressable
              style={styles.button}
              onPress={() => {
                onClose();
                router.push('/card-processing');
              }}
            >
              <Text style={styles.buttonText}>{addCardForm.submitButton}</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
  },
  handle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A1F',
    marginBottom: 24,
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#767676',
  },
  input: {
    height: 51,
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CBD2D6',
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
    color: '#171A1F',
    alignSelf: 'stretch',
  },
  cvvInput: {
    flex: 1,
    fontSize: 16,
    color: '#171A1F',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  inputWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 29,
    alignSelf: 'stretch',
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CBD2D6',
    backgroundColor: '#F5F5F5',
    height: 51,
  },
  cvvIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -9,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  half: {
    flex: 1,
  },
  button: {
    width: "100%",
    height: 52,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#5000EA',
    marginBottom: 16,
  },
  securityBox: {
    width: "100%",
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    marginBottom: 16,
    backgroundColor: '#F8FBFF',
  },
  securityBoxText: {
    fontSize: 14,
    color: '#5F15EE',
    textAlign: 'left',
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  securityMessage: {
    fontSize: 12,
    color: '#808080',
    textAlign: 'center',
  },
  securitySubtext: {
    fontSize: 12,
    color: '#808080',
    textAlign: 'center',
  },
});
