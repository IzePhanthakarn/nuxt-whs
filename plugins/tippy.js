import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
    interactive: true,
    theme: "material",
    duration: 500,
    interactive: true,
    animateFill: false,
    animation: 'shift-away',
    arrow: true,
    arrowType: "round",
    // placement: "auto",
    //   trigger: "click"
});

// Vue.use(VueTippy);
// // or
// Vue.use(VueTippy, {
//   directive: "tippy", // => v-tippy
//   flipDuration: 0,
//   popperOptions: {
//     modifiers: {
//       preventOverflow: {
//         enabled: false
//       }
//     }
//   }
// });

Vue.component("tippy", TippyComponent);

// default
// maxWidth: 350,

// no maxWidth
// maxWidth: 'none',