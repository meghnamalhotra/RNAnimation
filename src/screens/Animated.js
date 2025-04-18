// import React, {useState} from "react";
// import {Text, View, ScrollView} from 'react-native';
// const arr = [1,2,3,4, 5,6,7,8,9, 10];
// const AnimatedComp = () => {
//     const [show, setShow] = useState(false);
//     return(
//         <View>
//             <View style={{height: 80, backgroundColor: 'blue', transform: [
//                 {translateX : show ? 0 : -60}
//             ]}} />
//             <ScrollView
//              onScroll={(event)=> {
//                 const scroll = event.nativeEvent.contentOffset.y;
//                 if(scroll > 80){
//                     setShow(true);
//                 }else{
//                     setShow(false);
//                 }
//                 console.log('Event', event.nativeEvent)
//              }}
//             >
//              <View style={{flex: 1}}>
//                 {arr.map((item, index)=>{
//                     return(
//                         <View style={{height: 50, width: 50, backgroundColor: 'pink', margin: 10}}>
//                             <Text>{item}</Text>
//                         </View>
//                     )
//                 })}
//              </View>
//             </ScrollView>
//             <Text>AnimatedComp</Text>
//         </View>
//     )

// }

// export default AnimatedComp;

// import { Button, View } from 'react-native';
// import Animated, { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

// export default function AnimatedComp() {
//   const width = useSharedValue(100);

//   const handlePress = () => {
//     width.value = withSpring(width.value + 50);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <Animated.View
//         style={{
//           width,
//           height: 100,
//           backgroundColor: 'violet',
//         }}
//       />
//       <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AnimatedComp = () => {
  const animatedColor = useSharedValue('blue');
  const animatedSize = useSharedValue(100);
  const animatedPositionX = useSharedValue(0);
  const animatedPositionY = useSharedValue(0);

  const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const handlePress = () => {
    // Randomize color, size, and position on each tap
    animatedColor.value = withTiming(
      `rgb(${getRandomValue(0, 255)}, ${getRandomValue(
        0,
        255
      )}, ${getRandomValue(0, 255)})`,
      { duration: 500 }
    );

    animatedSize.value = withSpring(getRandomValue(80, 150));
    animatedPositionX.value = withSpring(getRandomValue(0, 200));
    animatedPositionY.value = withSpring(getRandomValue(0, 200));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animatedColor.value,
      width: animatedSize.value,
      height: animatedSize.value,
      transform: [
        { translateX: animatedPositionX.value },
        { translateY: animatedPositionY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 10,
  },
});

export default AnimatedComp;
