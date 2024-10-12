import { FormikProps } from "formik"
import { Dispatch, SetStateAction } from "react"

type otp = {
  otp:string
}

export type indexInput = {
  visible: boolean,
  setVisible:Dispatch<SetStateAction<boolean>>,
  otpFormik?: FormikProps<otp>
}