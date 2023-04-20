'use client'
import React, { useEffect, useRef } from "react";
import styles from "./AnimatedKPI.module.css";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import { type } from "os";
type Props = {
    value:number
}
const AnimatedKPI = ({value}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const SpringValue = useSpring(motionValue, { duration: 2500 });
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
  SpringValue.on("change", (latest)=>{
    if(ref.current && latest.toFixed(0)<=value){
        ref.current.textContent= latest.toFixed(0)
    }
  })
  }, [SpringValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedKPI;
