import React from 'react';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageTitle from '../../common/PageTitle';

const bem = defineBlock('SpellingBeePage');

const SpellingBeePage = () => (
  <PageBase className={bem()}>
    <PageTitle text="NYT Spelling Bee" />
  </PageBase>
);

export default SpellingBeePage;
