import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

export const LangSwitcher = memo(function LangSwitcher() {
  const { i18n } = useTranslation();

  const onLanguageChange = useCallback(
    function () {
      i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    },
    [i18n]
  );

  return <Button onClick={onLanguageChange}>Change Language</Button>;
});
