---
title:  ngrx基本操作
author: 崔城
date: '2022-07-03'
categories:
 - 教程
tags:
 - 教程
---

# ngrx基本操作

## ngrx的基本操作流程

![输入图片说明](/assets/img/ngrx.png)

## 安装ngrx全家桶

```
npm i @ngrx/store @ngrx/effects @ngrx/entity  @ngrx/router-store @ngrx/store-devtools @ngrx/schematics --registry=https://registry.npm.taobao.org
```

## 配置ngrx cil
输入以下命令，让ngrx配置到angular.json中
```
ng config cli.defaultCollection @ngrx/schematics
```

```json
//angular.json
"cli": {
    "analytics": false,
    "defaultCollection": "@ngrx/schematics"
}
```

## 创建Store

```
ng g store State --root --module app.module.ts --statePath store --stateInterface AppState   
```

## 创建Action

```
ng g action store/actions/counter  --skipTests      
```

```ts
import { createAction } from '@ngrx/store';

export const add = createAction('add');
export const deletes = createAction('delete')
```

## 创建Reducer

```
ng g reducer store/reducers/counter --skipTests --reducers=../index.ts         
```

```ts
import { createReducer, on } from '@ngrx/store';
import { add, deletes } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export interface State {
  count: number
}

export const initialState: State = {
  count: 1
};

export const reducer = createReducer(
  initialState,
  on(add, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(deletes, (state) => ({
    ...state,
    count: state.count - 1
  }))
);

```

## 创建selector

```
ng g selector store/selectors/counter --skipTests                
```

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { counterFeatureKey, State } from '../reducers/counter.reducer';

export const selectCounter = createFeatureSelector<AppState, State>(counterFeatureKey)

export const selectCount = createSelector(selectCounter, state => state.count)
```

## 组件类触发Action，获取状态

```ts
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store';
import { add, deletes, yanchi } from './store/actions/counter.actions';
import { selectCount } from './store/selectors/counter.selectors';


export class AppComponent {
  count: Observable<number>
  constructor(private store: Store<AppState>) {
    this.count = this.store.pipe(select(selectCount))
  }

  add() {
    this.store.dispatch(add())
  }
  deletes() {
    this.store.dispatch(deletes())
  }
  yanchi(){
    this.store.dispatch(yanchi())
  }
}

```

## 渲染数据
```html
<button (click)="add()">加</button>
<div>{{count | async}}</div>
<button (click)="deletes()">减</button>
```

## Action传值

1. 在组件中使用dispatch触发Action时传递参数，参数最终会被放置在Action对象中。

```ts
this.store.dispatch(add({count:5}))
```

2. 在创建Action Creator函数时，获取参数并指定参数类型。

```ts
export const add = createAction('add',props<{count:number}>());
```

3. 在创建Action Creator函数时，获取参数并指定参数类型。

```ts
export const reducer = createReducer(
  initialState,
  on(add, (state, action) => ({
    ...state,
    count: state.count + action.count
  }))
);
```

## effects
需求:在页面中新增一个按钮，点击按钮后延迟一秒让数值增加。

1. 在组件模板中新增一个用于异步数值增加的按钮，按钮被点击后执行 yanchi 方法

```html
<button (click)="yanchi()">延迟接收</button>
```

2. 在组件类中新增yanchi 方法，并在方法中触发执行异步操作的Action

```ts
yanchi(){
  this.store.dispatch(yanchi())
}
```

3. 在Action文件夹里面新加Action

```ts
export const yanchi = createAction('yanchi')
```

4. 创建Effect,接收Action并执行副作用，继续触发Action

```
ng g effect store/effects/counter --root --module app.module.ts --skipTests
```

Effect功能由@ngrx/effects模块提供，所以在根模块中需要导入相关的模块依赖

```ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'
import { add, yanchi } from '../actions/counter.actions'

// createEffect
//用于创建Effect， Effect 用于执行副作用.
//调用方法时传递回调函数，回调函数中返回Observable 对象，对象中要发出副作用执行完成后要触发的Action对象
//回调函数的返回值在createEffect 方法内部被继续返回，最终返回值被存储在了Effect 类的属性中
// NgRx在实例化Effect 类后，会订阅Effect 类属性，当副作用执行完成后它会获取到要触发的Action对象并触发这个Action

// Actions
//当组件触发Action时，Effect 需要通过Actions 服务接收Action, 所以在Effect 类中通过constructor构造函数参数的方式将Actions服务类的实例对象注入到Effect类中
// Actions 服务类的实例对象为Observable对象，当有Action 被触发时，Action对象本身会作为数据流被发出

// ofType
//对目标Action 对象进行过滤.
//参数为目标Action 的Action Creator 函数
//如果未过滤出目标Action对象，本次不会继续发送数据流
//如果过滤出目标Action 对象，会将Action对象作为数据流继续发出



@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}
  yanchi_effect = createEffect(() => {
    return this.actions$.pipe(
      ofType(yanchi),//找的要处理的action
      mergeMap(() => timer(2000).pipe(
        map(() => add({ count: 10 }))
      ))
    )
  })
}

```







