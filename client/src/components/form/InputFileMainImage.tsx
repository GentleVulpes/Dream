import React from 'react'

 type InputFileMainImageProps = React.ComponentProps<'input'> & {
        id: string;
        label: string;
        buttonLabel: string;
    }

const InputFileMainImage = ({id, label,buttonLabel, ...props}: InputFileMainImageProps) => {

  async function handleClick(event: React.MouseEvent) {

  }
   
  return (
    <div className='flex flex-col'>
        <label className='title-label'>{label}</label>
        <div>
          <img src="" alt="" />
        </div>

        <label className='button' htmlFor={id}>
            <span>{buttonLabel}</span>
            <input className='hidden' id={id} type="file" {...props} />
        </label>
    </div>
  )
}

export default InputFileMainImage
