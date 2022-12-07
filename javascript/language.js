
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: 'true',
    includedLanguages:'vi,en,es,fr,ko', 
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}