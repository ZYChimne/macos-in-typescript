import React  from "react";
export type PreferencesProps = {
  show: boolean;
}
export type PreferencesContentType = 'Overview' | 'Displays' | 'Storage' | 'Support' |'Resources'
export type PreferencesContentProps = {
  contentType: PreferencesContentType;
}
