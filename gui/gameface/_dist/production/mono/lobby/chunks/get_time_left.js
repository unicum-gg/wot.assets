const o = (o, a) => t(o - a),
    t = (o) => {
        const t = Math.floor(o);
        return {
            totalSecondsLeft: t,
            seconds: Math.floor(t % 60),
            minutes: Math.floor(t / 60) % 60,
            hours: Math.floor((t / 3600) % 24),
            totalDays: Math.floor(t / 86400),
        };
    };
export { o as a, t as g };
