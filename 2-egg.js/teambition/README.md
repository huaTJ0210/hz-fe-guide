# teambition

## 1、业务请求参数验证

> 使用 egg-validate 插件,使用 egg 框架的 loader 加载 validate 文件夹下增加的验证规则
> 在 controller 中对请求参数进行验证

## 2、请求结果错误处理

> 通过 throw HttpError 定义类型和错误信息；通过 error_handler 进行统一的错误处理
