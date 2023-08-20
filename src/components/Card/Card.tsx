// Styles
import Image from 'next/image'
import styles from './Card.module.scss'

// Helpers
import classNames from 'classnames'

interface CardProps {
  children: React.ReactNode
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

interface CardTitleProps {
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  return <div className={classNames(styles.base)}>{props.children}</div>
}

const CardImage = (props: CardImageProps) => {
  return (
    <div className={classNames(styles.image, props.className)}>
      <Image
        src={props.src}
        alt={props.alt}
        fill
      />
    </div>
  )
}

const CardBody = (props: CardBodyProps) => {
  return (
    <div className={classNames(styles.body, props.className)}>
      {props.children}
    </div>
  )
}

const CardTitle = (props: CardTitleProps) => {
  return (
    <div className={classNames(styles.title)}>
      <p>{props.children}</p>
    </div>
  )
}

Card.Image = CardImage
Card.Body = CardBody
Card.Title = CardTitle

export default Card
