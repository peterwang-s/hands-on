import { useState } from 'react';

export default function useLanguage(): [string, string] {
    const [
        lang,
        // setLang
    ] = useState((navigator.language && navigator.language.slice(0, 2).toLowerCase()) || 'zh'); // en,zh
    const [
        _locale,
        // set_locale
    ] = useState((navigator.languages && navigator.languages[0]) || 'zh'); // en,zh

    return [lang, _locale];
}
