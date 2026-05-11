import CvvInfoIcon from '@/components/CvvInfoIcon';
import PciDssBadge from '@/components/PciDssBadge';
import ShieldIcon from '@/components/ShieldIcon';
import addCardForm from '@/data/addCardForm.json';
import { addCardModalStyles as styles } from '@/styles/addCardModalStyles';
import { router } from 'expo-router';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
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
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.content}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
              <Pressable style={styles.handle} onPress={onClose}>
                <View style={styles.handleBar} />
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            bounces={false}
          >
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
                Keyboard.dismiss();
                onClose();
                router.push('/card-processing');
              }}
            >
              <Text style={styles.buttonText}>{addCardForm.submitButton}</Text>
            </Pressable>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
