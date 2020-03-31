import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { multiLabel } from './actions'

import { Wrapper, Title } from './styled'

export default function HomePage() {
  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages.header} />
        <br />
        {multiLabel('ciao')}
      </Title>
    </Wrapper>
  )
}
