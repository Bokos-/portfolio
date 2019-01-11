import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

export function ReadTime({ minutes }) {
  let cups = Math.round(minutes / 5)
  return (
    <React.Fragment>
      {`${new Array(cups || 1).fill('☕️').join('')} ${minutes} `}
      <FormattedMessage
        id="minutes.read"
        defaultMessage="{minutes, plural,
                      one {minute}
                      other {minutes}
                    } read"
        values={{ minutes }}
      />
    </React.Fragment>
  )
}

ReadTime.propTypes = {
  minutes: PropTypes.number,
}

ReadTime.defaultProps = {
  minutes: 0,
}
