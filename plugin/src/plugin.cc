#include <napi.h>

using namespace Napi;

Napi::ArrayBuffer Method(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  auto buf = info[0].As<ArrayBuffer>();

  reinterpret_cast<unsigned char *>(buf.Data())[0] = 123;

  return buf; // Napi::ArrayBuffer::New(env, buf.Data(), buf);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set(Napi::String::New(env, "Plugin"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(addon, Init)
