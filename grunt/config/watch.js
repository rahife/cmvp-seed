/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    return {
        'sass': {
            files: 'assets/sass/**/*.scss',
            tasks: ['sass:compile'],
            options: {
                livereload: true
            }
        }
    };
}