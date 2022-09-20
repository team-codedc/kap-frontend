import {atom} from 'recoil';

export const glboalCreateChallengeState = atom({
  key: 'glboalCreateChallenge',
  default: {
    name: '',
    description: '',
    image: {
      assets: [
        {
          fileName: '',
          fileSize: 0,
          height: 0,
          type: '',
          uri: '',
          width: 0,
        },
      ],
    },
    category: '',
  },
});
