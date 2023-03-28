import React, { useEffect } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { sql } from '@codemirror/lang-sql';
import { php } from '@codemirror/lang-php';
import { java } from '@codemirror/lang-java';
import { css } from '@codemirror/lang-css';
import { Compartment } from '@codemirror/state';
import { language } from '@codemirror/language';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';



export default function TextEditor() {
  useEffect(() => {
    const languageConf = new Compartment();
    const autoLanguage = EditorState.transactionExtender.of((tr) => {
      if (!tr.docChanged) return null;
      let docIsHTML = /^\s*</.test(tr.newDoc.sliceString(0, 100));
      let stateFacet = tr.startState.facet(language);
      if (docIsHTML && stateFacet != html) {
        return { effects: languageConf.reconfigure(html()) };
      } else if (
        !docIsHTML &&
        stateFacet != python &&
        stateFacet != sql &&
        stateFacet != php &&
        stateFacet != java &&
        stateFacet != css
      ) {
        if (tr.newDoc.toString().indexOf('<?php') != -1) {
          return { effects: languageConf.reconfigure(php()) };
        } else if (tr.newDoc.toString().indexOf('import java.') != -1) {
          return { effects: languageConf.reconfigure(java()) };
        } else if (tr.newDoc.toString().indexOf('def ') != -1) {
          return { effects: languageConf.reconfigure(python()) };
        } else if (tr.newDoc.toString().indexOf('SELECT ') != -1) {
          return { effects: languageConf.reconfigure(sql()) };
        } else if (/\bfunction\b/.test(tr.newDoc.toString())) {
          return { effects: languageConf.reconfigure(javascript()) };
        } else if (
          /\bclass\b/.test(tr.newDoc.toString()) ||
          /\binterface\b/.test(tr.newDoc.toString())
        ) {
          return { effects: languageConf.reconfigure(java()) };
        } else if (/\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/.test(tr.newDoc.toString())) {
          return { effects: languageConf.reconfigure(php()) };
        } else if (/\@[\w\-\_]+/.test(tr.newDoc.toString())) {
          return { effects: languageConf.reconfigure(css()) };
        }
      }
      return null;
    });
    const editorView = new EditorView({
      state: EditorState.create({
        doc: 'console.log("Hello World")',
        extensions: [xcodeDark, basicSetup, languageConf.of(autoLanguage)],
      }),
      parent: document.getElementById('editor'),
    });
    return () => {
      editorView.destroy();
    };
  }, []);
  return <div id='editor' />;
}
