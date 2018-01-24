import Logging from '@google-cloud/logging'
import config from '@/config/environment'
import pmx from 'pmx'

const logging = new Logging({
  projectId: config.logger.projectId
})
const log = logging.log(config.logger.logName)
const metadata = config.logger.metadata

function localLog (type, msg) {
  const plainMsg = JSON.stringify(msg)
  if (type === 'info') {
    console.info(plainMsg)
  } else if (type === 'debug') {
    console.debug(plainMsg)
  } else if (type === 'warning') {
    console.warn(plainMsg)
  } else {
    console.error(plainMsg)
  }
}

function write (type, msg, notify) {
  const entry = log.entry(metadata, msg)
  if (notify) {
    pmx.notify(msg)
  }
  log[type](entry, (err, apiResponse) => {
    if (err) {
      console.error('Error: ', err)
      console.error(`${type}: `, JSON.stringify(msg))
    }
  })
  if (process.env.NODE_ENV === 'development') {
    localLog(type, msg)
  }
}

export default class Logger {
  static info (msg) {
    write('info', msg)
  }

  static critical (msg) {
    write('critical', msg, true)
  }

  static debug (msg) {
    write('debug', msg)
  }

  static emergency (msg) {
    write('emergency', msg, true)
  }

  static error (msg) {
    write('error', msg, true)
  }

  static notice (msg) {
    write('notice', msg)
  }

  static warning (msg) {
    write('warning', msg)
  }
}