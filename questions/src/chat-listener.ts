import DotEnv from 'dotenv';
import { LiveChat } from '@freetube/youtube-chat';

DotEnv.config({
    debug: true,
});

export default () => {
    console.log('Loading chat…');
    console.log(`Connecting to channel: ${process.env.YOUTUBE_CHANNEL_ID}`);
    const liveChat = new LiveChat({
        channelId: (process.env.YOUTUBE_CHANNEL_ID || '')
    });
    // Emit at start of observation chat.
    // liveId: string
    liveChat.on('start', (liveId) => {
        console.log(`Started observing ${liveId}`);
    })

    // Emit at end of observation chat.
    // reason: string?
    liveChat.on('end', (reason) => {
        console.log(`Ended observing ${reason}`);
    });

    // Emit at receive chat.
    // comment: CommentItem
    liveChat.on('comment', (comment) => {
        console.log(`Received comment:`);
        console.log(comment);
    })

    // Emit when an error occurs
    // err: Error
    liveChat.on('error', (err) => {
        console.log(err);
    })
};