import { combineReducers } from 'redux';

export const songsReducer = () => {
    return[
        {
            title: 'Mass Song',
            duration: '2:00'
        },
        {
            title: 'Class Song',
            duration: '2:20'
        },
        {
            title: 'Patriotic song',
            duration: '4:00'
        }, {
            title: 'Folk Song',
            duration: '5:00'
        }
    ]
};

export const selectSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectSong: selectSongReducer
});