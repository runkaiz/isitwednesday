export function isItWednesday(timestamp: number): boolean {
    const now = new Date(timestamp*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[now.getDay()]

    if (dayOfWeek === 'Wednesday') {
        return true
    }

    return false
}

export function getSnark(wednesday: boolean): string {
    const snarksOnWednesday: string[] = [
        // When it is Wednesday
        "Congrats! You've made it to Wednesday in your corner of the world. Celebrate accordingly.",
        "Yes, it's Wednesday. Tell your friends, shock your enemies.",
        "Well, what do you know? It's Wednesday. Adjust your existential dread accordingly.",
        "Breaking News: It's Wednesday. In other news, water is wet.",
        "It's Wednesday! In case you needed a reminder that time is a social construct.",
      ];

      const snarksOffWednesday: string[] = [
        // When it's not Wednesday
        "Nope, not Wednesday. Maybe tomorrow, if you're lucky.",
        "Alas, it is not Wednesday. Your calendar is not broken; your spirit probably is.",
        "In today's episode of 'Is It Wednesday?', the answer is a resounding no.",
        "Not Wednesday. Come back after spinning the Earth a bit more.",
        "Guess what? Still not Wednesday. I bet you're surprised."
      ]

      return wednesday ? snarksOnWednesday[Math.floor(Math.random() * snarksOnWednesday.length)] : snarksOffWednesday[Math.floor(Math.random() * snarksOffWednesday.length)]
}