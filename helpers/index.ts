import { Variants } from "framer-motion";
/**
 *
 * Helpers
 */
export const motionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -300,
    transition: {
      delay: 0.6,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 300,
  },
};
export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

export function getStringFromErr(err: unknown) {
  const str = `${err}`;
  const newStr = str.substring(
    getPosition(str, ":", 4) + 1,
    getPosition(str, ":", 5)
  );
  return newStr;
}

export const createAsyncInterval = async (func: () => null, time: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });

};
