export const userTemplate = () => {
  return {
    username: "anonUser",
    email: "",
    role: "User",
    name: "Anon",
    nick: "Mysterious fox",
    bio: "",
    dob: "-",
    location: "-",
    joined: "12/16",
    personalProfile: {
      favorites: [{}],
      completed: [{}],
      toBeWatched: [
        {
          animeId: "'224'",
          animeTitle: "'blue l2ck",
          ratingScore: "'99'",
        },
      ],
    },
  };
};
