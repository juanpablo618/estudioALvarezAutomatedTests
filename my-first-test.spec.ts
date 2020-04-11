import 'testcafe';
import { t } from 'testcafe';


fixture('Landing Page - HEADER').page('http://google.com')
    .page('http://google.com')
    .before(async ctx => {
        ctx.globalUserName = 'Marques';

    })
    .beforeEach(async ctx => {
        t.ctx.userId = 12345;

    })
    .after(async ctx => console.log('fixture 1 - after'))
    .afterEach(async ctx => console.log('fixture 1 - afterEach'));
       

test('should display a submit button', async t => {})
.before(async t => {
    console.log(t.ctx.userId);
})
;
test('2', async t => {});
test('3', async t => {});

